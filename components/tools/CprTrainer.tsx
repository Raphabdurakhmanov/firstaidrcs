"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { DICTS } from "@/lib/i18n/dict";
import type { Lang } from "@/lib/types";

const BPM = 110;
const BEAT_MS = 60000 / BPM;
const BREATH_MS = 5000;

export default function CprTrainer({ lang }: { lang: Lang }) {
  const t = DICTS[lang].cpr;
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState<"with" | "only">("with");
  const [sound, setSound] = useState(true);
  const [count, setCount] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [phase, setPhase] = useState<"push" | "breath">("push");
  const [beat, setBeat] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [taps, setTaps] = useState<number[]>([]);

  const audio = useRef<AudioContext | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedAt = useRef(0);
  const state = useRef({ count: 0, mode, sound });
  state.current.mode = mode;
  state.current.sound = sound;

  const click = useCallback((high: boolean) => {
    if (!state.current.sound) return;
    try {
      const ctx = audio.current ?? new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audio.current = ctx;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.value = high ? 1320 : 880;
      g.gain.setValueAtTime(0.25, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.09);
    } catch {
      /* звук недоступен — продолжаем без него */
    }
  }, []);

  const stop = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setRunning(false);
  }, []);

  const tick = useCallback(() => {
    const s = state.current;
    s.count += 1;
    setCount(s.count);
    setBeat(true);
    setTimeout(() => setBeat(false), 120);
    click(s.count % 10 === 0);
    if (s.count >= 30) {
      s.count = 0;
      setCycles((c) => c + 1);
      if (s.mode === "with") {
        setPhase("breath");
        timer.current = setTimeout(() => {
          setPhase("push");
          setCount(0);
          timer.current = setTimeout(tick, BEAT_MS);
        }, BREATH_MS);
        return;
      }
    }
    timer.current = setTimeout(tick, BEAT_MS);
  }, [click]);

  const start = () => {
    state.current.count = 0;
    setCount(0);
    setCycles(0);
    setPhase("push");
    setElapsed(0);
    startedAt.current = Date.now();
    setRunning(true);
    click(true);
    timer.current = setTimeout(tick, BEAT_MS);
  };

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt.current) / 1000)), 500);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => () => stop(), [stop]);

  const tap = useCallback(() => setTaps((arr) => [...arr.slice(-7), performance.now()]), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (e.code === "Space" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "BUTTON") {
        e.preventDefault();
        tap();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tap]);

  let rate: number | null = null;
  if (taps.length >= 4) {
    const span = taps[taps.length - 1] - taps[0];
    rate = Math.round(((taps.length - 1) * 60000) / span);
  }
  const rateLabel = rate === null ? null : rate < 100 ? t.slow : rate > 120 ? t.fast : t.good;
  const rateColor = rate === null ? "" : rate < 100 || rate > 120 ? "var(--r)" : "var(--ok)";
  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");
  const showSwap = running && elapsed >= 120 && elapsed % 120 < 10;

  return (
    <div className="cpr-stage">
      <div>
        <div className={`pulse ${beat ? "beat" : ""} ${phase === "breath" ? "breath" : ""}`} aria-hidden>
          <span className="heart">{phase === "breath" ? "◌" : "♥"}</span>
        </div>
      </div>
      <div>
        <div className="row">
          <span className="small muted">{t.mode}:</span>
          <div className="seg">
            <button className={mode === "with" ? "on" : ""} onClick={() => setMode("with")}>
              {t.with}
            </button>
            <button className={mode === "only" ? "on" : ""} onClick={() => setMode("only")}>
              {t.only}
            </button>
          </div>
          <label className="row small" style={{ gap: 6 }}>
            <input type="checkbox" checked={sound} onChange={(e) => setSound(e.target.checked)} /> {t.sound}
          </label>
        </div>
        <div className="counters" aria-live="polite">
          <div>
            <b>{phase === "breath" ? "2×" : `${count}/30`}</b>
            <span>{phase === "breath" ? t.breaths : t.compressions}</span>
          </div>
          <div>
            <b>{cycles}</b>
            <span>{t.cycles}</span>
          </div>
          <div>
            <b>
              {mm}:{ss}
            </b>
            <span>{t.time}</span>
          </div>
        </div>
        {showSwap && <div className="callout yellow small" style={{ marginBottom: 12 }}>{t.swap}</div>}
        <div className="row">
          {running ? (
            <button className="btn dark" onClick={stop}>
              ■ {t.stop}
            </button>
          ) : (
            <button className="btn" onClick={start}>
              ▶ {t.start} · {BPM}/min
            </button>
          )}
          <button className="btn ghost" onClick={tap}>
            ✋ {t.tap}
          </button>
        </div>
        <p className="small muted" style={{ marginTop: 12 }}>
          {t.tip}
        </p>
        {rate !== null && (
          <p className="rate">
            {t.yourRate}: <b style={{ color: rateColor }}>{rate}</b> {t.perMin} — <span style={{ color: rateColor }}>{rateLabel}</span>
          </p>
        )}
      </div>
    </div>
  );
}
