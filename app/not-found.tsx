import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-base font-light">¯\_(ツ)_/¯</h1>
        <Image
          src="/cat.jpg"
          alt="Cat"
          width={250}
          height={250}
          className="rounded-lg object-cover"
          priority
        />
        <p className="text-muted-foreground text-sm">
          Say hi to the cat and go back to{" "}
          <Link
            href="/"
            className="text-primary transition-colors hover:text-muted-foreground"
          >
            home
          </Link>
          .
        </p>
      </div>
      <Footer />
    </main>
  );
}