export default function sliceSubs(subs: number) {
  if (subs >= 1_000_000) return `${(subs / 1_000_000).toFixed(1)}M`;
  if (subs >= 1_000) return `${(subs / 1_000).toFixed(1)}K`;
  return subs.toLocaleString('en-US');
}
