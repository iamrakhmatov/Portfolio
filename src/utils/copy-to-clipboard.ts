export async function copyTextToClipboard() {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText("iamrakhmatov@gmail.com");
  }
  return;
}
