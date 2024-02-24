'use client'
import { Icon } from "@iconify/react";
import Link from "next/link";
import { categoryLessonName } from "@utils/types";

type BackButtonProps = {
    categoryLesson: categoryLessonName
}

const BackButton = ({categoryLesson}: BackButtonProps) => {
    return (
        <Link href={`/markdowns/${categoryLesson}`}>
            <Icon icon="tabler:arrow-back-up-double" className="text-jade12" />
        </Link>
    );
};

export default BackButton;