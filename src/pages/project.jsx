import InfiniteMenu from "@/components/InfiniteMenu";
import React from "react";
import ProjectPageName from "./projectpagename";

export default function Project() {
  const items = [
    {
      image: "https://imgs.search.brave.com/sWZBywXEBQh0QBse97tygOyCQyQSUCumWiE9l6m15PU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saW5l/MjUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzExLzAw/MzU4MC1UaGUtTW90/aW9uLVRoZWF0ZXIt/b24tQmVoYW5jZS5q/cGc?grayscale",
      link: "https://google.com/",
      title: "Project 1",
      description: "Crafting the warm introduction.",
    },
    {
      image: "https://imgs.search.brave.com/uEMf2QSUMXK_rZFilvfVoE6dmyfAwtwBgm0IHnTQlcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saW5l/MjUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE2LzAyL0V2/ZXJ5dGhpbmctWW91/LUxvdmUuanBn?grayscale",
      link: "https://google.com/",
      title: "Project 2",
      description: "Crafting the warm introduction.",
    },
    {
      image: "https://imgs.search.brave.com/yy83PCNFIn5PVCmsXwhfSxkP79fKG0fv8dvh0_R3g6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGdHRS/MGxjV0kvMS8wLzEx/MzF3L2NhbnZhLXRl/YWwtYW5kLW9yYW5n/ZS1ncmFkaWVudC1h/YnN0cmFjdC10ZWNo/LWNvbmZlcmVuY2Ut/cG9zdGVyLUhCOTJ5/SFk3VVhzLmpwZw?grayscale",
      link: "https://google.com/",
      title: "Project 3",
      description: "Crafting the warm introduction.",
    },
    {
      image: "https://imgs.search.brave.com/Rcu7MM3DjUaiVfS2m0Qg2rWcT4E9CFizI6bqmZiz9u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHTlJs/c0RJZTQvMS8wLzEx/MzF3L2NhbnZhLWJs/YWNrLXB1cnBsZS1t/ZXRhbGxpYy1mdXR1/cmlzdGljLXRlY2gt/ZXZlbnQtcG9zdGVy/LUp5cmZ5TXhiN01V/LmpwZw?grayscale",
      link: "https://google.com/",
      title: "Project 4",
      description: "Crafting the warm introduction.",
    },
    {
      image: "https://imgs.search.brave.com/odCLv2jNXGOnVuH7dtF3W1c2V66a4yW826TBbfM8zi4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZmxhdC1kZXNpZ24t/YWJzdHJhY3QtcG9z/dGVyLXRlbXBsYXRl/XzUyNjgzLTEwNjg1/Ni5qcGc_dz03NDAm/cT04MA?grayscale",
      link: "https://google.com/",
      title: "Project 5",
      description: "Crafting the warm introduction.",
    },
    {
      image: "https://imgs.search.brave.com/WGVNxqZl58lZlJxLXrkU5GvBQ6fT_Htbl1xJJBRX8Bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saW5l/MjUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE2LzAyL0ZT/VC5qcGc?grayscale",
      link: "https://google.com/",
      title: "Project 6",
      description: "Crafting the warm introduction.",
    },
  ];

  return (

      <div style={{ height: "100vh", position: "relative" }}>
        <InfiniteMenu items={items} />
        <ProjectPageName/>
      </div>

  );
}
