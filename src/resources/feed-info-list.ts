type ValidUrl = `${'http' | 'https'}://${string}.${string}`;

type FeedInfoTuple = [label: string, url: ValidUrl];

export interface FeedInfo {
  label: string;
  url: ValidUrl;
}

const createFeedInfoList = (feedInfoTuples: FeedInfoTuple[]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({
      label,
      url,
    });
  }

  return feedInfoList;
};

/**
 * フロントエンド関連記事のフィード情報一覧。
 * CSS、JavaScript、Web Platform、ブラウザ、UI実装に寄った情報源を集約する。
 * ラベルが被るとバリデーションエラーになるので別のラベルを設定してください。
 */
// prettier-ignore
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['サイト名・トピック名など', 'RSS/AtomフィードのURL'],
  ['CSS-Tricks', 'https://css-tricks.com/feed/'],
  ['Smashing Magazine', 'https://www.smashingmagazine.com/feed/'],
  ['Mozilla Hacks', 'https://hacks.mozilla.org/feed/'],
  ['Chrome Developers Blog', 'https://developer.chrome.com/blog/feed.xml'],
  ['web.dev Blog', 'https://web.dev/feed.xml'],
  ['Frontend Masters Blog', 'https://frontendmasters.com/blog/feed/'],
  ['JSer.info', 'https://jser.info/rss/'],
  ['Publickey', 'https://www.publickey1.jp/atom.xml'],
  ['Coliss', 'https://coliss.com/feed'],
  ['Zenn CSS', 'https://zenn.dev/topics/css/feed'],
  ['Zenn JavaScript', 'https://zenn.dev/topics/javascript/feed'],
  ['Zenn Frontend', 'https://zenn.dev/topics/frontend/feed'],
]);
