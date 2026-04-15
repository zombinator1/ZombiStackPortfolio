export function BackgroundDecor() {
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
