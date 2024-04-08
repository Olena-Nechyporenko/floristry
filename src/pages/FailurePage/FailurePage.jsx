import {
  Wrapper,
  Title,
  Text,
  Link,
  ArrowIcon,
  CheckIcon,
} from './FailurePage.styled';

export default function FailurePage() {
  return (
    <Wrapper>
      <CheckIcon />
      <Title>Payment failed !</Title>
      <Text>
        The payment was unsuccessful. Please try again later or use another
        payment method.
      </Text>
      <Link to="/payment">
        Try again
        <ArrowIcon />
      </Link>
    </Wrapper>
  );
}
