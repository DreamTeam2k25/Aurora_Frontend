import { useAuthStore } from "./auth/auth";
import { usePostStore } from "./portal/posts";
import { useReactionsStore } from "./portal/reactions";
import { useImageStore } from "./image/image";
import { useStudentsStore } from "./students/student";
import { useGuildMembersStore } from "./students/guildMembers";
import { useCommentsStore } from "./portal/comments";
import { useRepliesStore } from "./portal/replies";

export {
    useAuthStore,
    usePostStore,
    useReactionsStore,
    useImageStore,
    useStudentsStore,
    useGuildMembersStore,
    useCommentsStore,
    useRepliesStore,
}