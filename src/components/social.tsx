import Link from "next/link";
import Image from "next/image";

export default function Social() {
  return (
    <div className="flex w-full items-center justify-center gap-x-3 pb-1">
      <Link href="/">
        <Image
          className="size-[14px] opacity-55 hover:opacity-65"
          src="/icons/instagram.svg"
          alt="Intagram"
          width={100}
          height={100}
        />
      </Link>

      <Link href="/">
        <Image
          className="size-[14px] opacity-55 hover:opacity-65"
          src="/icons/facebook.svg"
          alt="Facebook"
          width={100}
          height={100}
        />
      </Link>

      <Link href="/">
        <Image
          className="size-[14px] opacity-55 hover:opacity-65"
          src="/icons/x.svg"
          alt="X"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}
