"use client";
import { useEffect, useState } from "react";

interface TypingTextProps {
    text: string;
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
    delay?: number;
}

type Phase = "typing" | "pausing" | "deleting";

export default function TypingText({
    text,
    typeSpeed = 100,
    deleteSpeed = 60,
    pauseDuration = 1500,
    delay = 300,
}: TypingTextProps) {
    const [displayed, setDisplayed] = useState("");
    const [phase, setPhase] = useState<Phase>("typing");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(t);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let t: ReturnType<typeof setTimeout>;

        if (phase === "typing") {
            if (displayed.length < text.length) {
                t = setTimeout(() => {
                    setDisplayed(text.slice(0, displayed.length + 1));
                }, typeSpeed);
            } else {
                // Wrap dalam setTimeout agar tidak synchronous
                t = setTimeout(() => setPhase("pausing"), 0);
            }
        } else if (phase === "pausing") {
            t = setTimeout(() => setPhase("deleting"), pauseDuration);
        } else if (phase === "deleting") {
            if (displayed.length > 0) {
                t = setTimeout(() => {
                    setDisplayed(text.slice(0, displayed.length - 1));
                }, deleteSpeed);
            } else {
                // Wrap dalam setTimeout agar tidak synchronous
                t = setTimeout(() => setPhase("typing"), 0);
            }
        }

        return () => clearTimeout(t);
    }, [started, phase, displayed, text, typeSpeed, deleteSpeed, pauseDuration]);

    return (
        <>
            {displayed}
            <span className="inline-block w-[2px] h-[0.85em] bg-white align-middle ml-[1px] animate-pulse" />
        </>
    );
}