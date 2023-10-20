import { Module } from "@nestjs/common";
import { PhotoResolver } from "./photo.resolver";

@Module({
  providers: [PhotoResolver],
})
export class PhotoModule {}
