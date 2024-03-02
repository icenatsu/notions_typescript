import { useQuery } from "@tanstack/react-query";
import { getLessons } from "@utils/getLessons";
import { LessonsSchema } from "@utils/schemas";
import { categoryLessonName } from "@utils/types";


const useLessons = (categoryLesson: categoryLessonName) => {
  const usersKeys = {
    all: ["listLessons", { folder: categoryLesson }],
  };

  return useQuery({
    queryKey: usersKeys.all,
    queryFn: async () => getLessons(categoryLesson, LessonsSchema),
  });
};

export default useLessons;
