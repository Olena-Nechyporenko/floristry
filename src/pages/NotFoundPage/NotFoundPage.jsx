import {
  Wrapper,
  EmojiIcon,
  Title,
  Link,
  ArrowIcon,
} from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <Wrapper>
      <EmojiIcon />
      <Title>Oops! We cound not find that page (404)</Title>
      <Link to="/">
        Go to homepage
        <ArrowIcon />
      </Link>
    </Wrapper>
  );
}
