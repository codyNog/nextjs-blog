import { Card } from "~/components/atoms/Card";
import { Layout } from "~/components/templates/layouts";

export default function Component() {
  return (
    <Layout>
      <Card>
        このサイトはcodyNogのサイトです。
        <br />
        技術ブログ、TRPGシナリオ、その他日記などのコンテンツを掲載しています。
        <br />
        著作権の範囲内でお楽しみください。
      </Card>
    </Layout>
  );
}
