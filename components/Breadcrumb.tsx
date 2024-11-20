import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);

  return (
    <nav
      className="flex items-center text-sm text-gray-500 mb-4"
      aria-label="Breadcrumb"
    >
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const url = `/${segments.slice(0, index + 1).join("/")}`;

        return (
          <span key={url} className="flex items-center">
            <Link
              href={url}
              className={`hover:text-gray-700 ${isLast ? "text-gray-700" : ""}`}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
            {!isLast && <span className="mx-2">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
