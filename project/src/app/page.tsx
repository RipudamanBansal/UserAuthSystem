import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Link href="/sign-up">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-1">
          Sign-up
        </button>
      </Link>
      <Link href="sign-in">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-1">
          Sign-in
        </button>
      </Link>
    </div>
  );
}
