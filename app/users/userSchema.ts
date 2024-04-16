import { z } from "zod";

export enum Role {
  "provider" = "provider",
  "client" = "client",
}
export enum UserStatus {
  "active" = "active",
  "inactive" = "inactive",
}

export const UserSchema = z.object({
  id: z.string(),

  userName: z.string({}).trim().min(5),

  phone: z.string({}).trim().min(8),

  email: z.string({}).email().trim().or(z.literal("")).optional(),

  location: z.string({}).trim().or(z.literal("")).optional(),

  role: z.nativeEnum(Role, {}),

  status: z.nativeEnum(UserStatus, {}),

  otherInformation: z.string({}).trim().or(z.literal("")).optional(),

  rtn: z.string({}).trim().or(z.literal("")).optional(),

  image: z.string().or(z.literal("")).optional(),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
