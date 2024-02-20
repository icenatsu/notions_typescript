import { useQuery } from "@tanstack/react-query";
import { getLessons } from "@utils/getLessons";
import { LessonsSchema } from "@utils/schemas";
import { lessonName } from "../utils/types";

// export const lessonKeys = {
//     all: ["listLessons", { folder: lesson }]
// };

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