import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box } from "theme-ui";
import { Avatar } from "theme-ui";
export default function Headshot(props: any) {
  return (
    <Avatar
      src="https://scontent.fdet1-1.fna.fbcdn.net/v/t31.18172-8/20863369_10155517019337416_2434261281807227559_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=kLFW92HMHc4AX9Qu3KS&_nc_ht=scontent.fdet1-1.fna&oh=00_AfCw21u6midQ4HTWvtPR9BCaSsUSd2hqUqq9j9d3GrQ68w&oe=64F6869C"
      height={200}
      width={200}
    ></Avatar>
  );
}
