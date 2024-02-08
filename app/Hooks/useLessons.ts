import { useQuery } from "@tanstack/react-query";
import { getLessons } from "@utils/getLessons";
import { LessonsSchema } from "@utils/schemas";
import { lessonName } from "../utils/types";


const useLessons = (lesson: lessonName) => {
    const usersKeys = {
        all: ["listLessons", { folder: lesson }]
    }

    return useQuery({
        queryKey: usersKeys.all,
        queryFn: async () => getLessons(lesson, LessonsSchema),
    })
};

export default useLessons;