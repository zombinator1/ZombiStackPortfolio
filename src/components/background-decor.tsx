export function BackgroundDecor() {
  return DarkAccent()
}


function Blue() {
return <>
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200/70 to-transparent" />

    <div className="absolute left-[-120px] top-[60px] h-[300px] w-[300px] rounded-full bg-violet-300/18 blur-3xl" />
    <div className="absolute left-[18%] top-[20px] h-[220px] w-[220px] rounded-full bg-indigo-300/16 blur-3xl" />
    <div className="absolute right-[-100px] top-[120px] h-[320px] w-[320px] rounded-full bg-sky-300/18 blur-3xl" />
    <div className="absolute right-[15%] bottom-[10px] h-[240px] w-[240px] rounded-full bg-fuchsia-300/12 blur-3xl" />
    <div className="absolute left-[30%] bottom-[-80px] h-[260px] w-[260px] rounded-full bg-cyan-200/12 blur-3xl" />

    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,white,transparent_82%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_45%)]" />
</>
}

function Zinc() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      <div className="absolute right-[-80px] top-[120px] h-[260px] w-[260px] rounded-full bg-sky-100/40 blur-3xl" />
      <div className="absolute left-[-80px] bottom-[40px] h-[220px] w-[220px] rounded-full bg-violet-100/30 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />
    </>
  );
}


function DarkAccent() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      <div className="absolute left-[-80px] top-[70px] h-[240px] w-[240px] rounded-full bg-indigo-200/12 blur-3xl" />
      <div className="absolute right-[-60px] bottom-[30px] h-[260px] w-[260px] rounded-full bg-sky-200/10 blur-3xl" />
      <div className="absolute left-[40%] top-[10px] h-[160px] w-[160px] rounded-full bg-violet-200/8 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,white,transparent_82%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.58),transparent_45%)]" />
    </>
  );
}