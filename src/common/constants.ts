const siteUrlStem = 'https://clagon.github.io/tech-blog-rss-feed';
const siteUrl = `${siteUrlStem}/`;

export default {
  // サイト設定
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: 'Frontend Tech RSS',
  siteDescription:
    'CSS、JavaScript、Web Platform、ブラウザ、UI実装など、フロントエンド開発に関する記事をまとめたRSSフィードを配信しています。',

  // フィード設定
  feedTitle: 'Frontend Tech RSS',
  feedDescription:
    'CSS、JavaScript、Web Platform、ブラウザ、UI実装など、フロントエンド開発に関する記事をまとめたRSSフィード',
  feedLanguage: 'ja',
  feedCopyright: 'Copyright (c) 2021 Kazuki Yamada and contributors',
  feedGenerator: 'clagon/tech-blog-rss-feed',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // リンク
  author: 'clagon',
  gitHubUserUrl: 'https://github.com/clagon/',
  gitHubRepositoryUrl: 'https://github.com/clagon/tech-blog-rss-feed/',
  xUserUrl: 'https://x.com/clagon',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: '',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; clagon/tech-blog-rss-feed',

  // サイトの追加方法のリンク
  howToAddSiteLink:
    'https://github.com/clagon/tech-blog-rss-feed#%E3%83%95%E3%82%A3%E3%83%BC%E3%83%89%E3%81%AE%E8%BF%BD%E5%8A%A0%E3%83%BB%E8%AA%BF%E6%95%B4',

  // 処理の設定
  feedFetchConcurrency: 50, // フィードを取得する並列数
  feedOgFetchConcurrency: 20, // OG情報を取得する並列数
  aggregateFeedDurationInHours: 8 * 24, // まとめフィードの対象となる時間の範囲
  maxFeedDescriptionLength: 200, // フィードのdescriptionの最大文字数
  maxFeedContentLength: 500, // フィードのcontentの最大文字数
  processImageConcurrency: 50, // 画像の処理の並列数。画像取得と変換
  eleventyFetchConcurrency: 50, // Eleventyの画像取得の並列数
  fetchedFeedCacheDurationInHours: 1, // フィードのキャッシュの有効時間
  fetchedOgCacheDurationInHours: 24, // OG情報のキャッシュの有効時間
};
