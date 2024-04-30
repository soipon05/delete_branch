import $ from "https://deno.land/x/dax@0.39.2/mod.ts";

// const result = await $`git branch --merged`.text();
const result = await $`git branch`.text();
const branches = result.split("\n").filter((branch) => branch.includes("*") === false);

branches.forEach(async (branch) => {
  await $`git branch -D ${branch.trim()}`;
  console.log(`${branch.trim()} is deleted`);
});
