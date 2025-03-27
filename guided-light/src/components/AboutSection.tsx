"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-border">
          About Tasbeeh
        </h2>
        <div className="prose max-w-none text-foreground">
          <p className="text-lg mb-4">
            Tasbeeh (تَسْبِيح) is a form of dhikr (remembrance of Allah) that involves the repetitive utterance of short phrases in the praise and glorification of Allah. It is a powerful way to connect with our Creator and find tranquility in His remembrance.
          </p>
          <p className="text-lg">
            Common Tasbeeh phrases include: SubhanAllah, Alhamdulillah, Allahu Akbar, and La ilaha illallah.
          </p>
        </div>
      </div>
    </section>
  );
}
