import Social from "@/components/social";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`flex w-full flex-col items-center font-light text-black/75 ${className}`}
    >
      <Social />
      <p>All content Copyright ©</p>
      <p>{year} Zayen Photography LLC</p>
    </footer>
  );
}
