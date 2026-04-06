import ErrorScreen from '../ErrorScreen/ErrorScreen';

type AppErrorFallbackProps = {
  onRetry: () => void;
};

export default function AppErrorFallback({ onRetry }: AppErrorFallbackProps) {
  return (
    <ErrorScreen
      code="Something went wrong"
      title="This page ran into an unexpected error"
      description="A runtime error stopped the app from rendering properly. You can try refreshing the experience or head back to the homepage."
      primaryActionLabel="Go back home"
      primaryActionHref="/"
      secondaryAction={
        <button type="button" className="error-screen__secondary" onClick={onRetry}>
          Try again
        </button>
      }
    />
  );
}
