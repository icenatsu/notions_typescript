'use client'
import { Icon } from "@iconify/react";
import Link from "next/link";
import { lessonName } from "@components/NavLinks";

type BackButtonProps = {
    lesson: lessonName
}

const BackButton = ({lesson}: BackButtonProps) => {
    return (
        <Link href={`/markdowns/${lesson}`}>
            <Icon icon="tabler:arrow-back-up-double" className="text-jade12" />
        </Link>
    );
};

export default BackButton;