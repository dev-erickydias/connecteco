import { Banner } from "@/components/banner/Banner";
import PostsBlog from "@/components/postBlog/PostsBlog";

import bannerInfo from "@/constants/bannerInfo";

export default function BlogPage() {
  return (
    <>
      <Banner bannerInfo={bannerInfo} className={"banner banner__home"} />
      <PostsBlog />
    </>
  );
}
