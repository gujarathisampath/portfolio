import Image from "next/image";
import Link from "next/link";

interface BlockType {
    type: string;
    text?: string;
    alt?: string;
    src?: string;
    content?: {
        type: string;
        text?: string;
        href?: string;
    }[]
}

function RenderBlock({ block }: { block: BlockType }) {
  switch (block.type) {
    case "heading":
      return <h2 className="text-lg font-normal text-primary">{block.text}</h2>;

    case "paragraph":
        return (
            <p className="text-base text-muted-foreground">
            {block.content?.map((item, i) => {
                switch (item.type) {
                case "text":
                    return <span key={i}>{item.text}</span>;

                case "link":
                    return (
                    <Link
                        key={i}
                        href={item.href || ""}
                        className="text-base text-primary hover:text-muted-foreground transition-all"
                    >
                        {item.text}
                    </Link>
                    );

                default:
                    return null;
                }
            })}
            </p>
        );

    case "image":
      return (
        <Image
          src={block.src!}
          alt={block.alt!}
          width={608}
          height={395.19}
          className="object-cover"
        />
      );

      default:
        return null;
  }
}

export default RenderBlock;