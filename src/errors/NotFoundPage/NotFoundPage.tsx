import ErrorScreen from '../ErrorScreen/ErrorScreen';

export default function NotFoundPage() {
  return (
    <ErrorScreen
      code="404"
      title="Page not found"
      description="The page you were looking for does not exist, may have been moved, or the link may be broken."
      primaryActionLabel="Go back home"
      primaryActionHref="/"
      variant="plain"
    />
  );
}
