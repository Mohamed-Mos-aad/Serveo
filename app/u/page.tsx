import AuthContent from "./AuthContent";



type AuthPageProps = {
  searchParams: Promise<{ mode?: string | string[] }>;
};

export default async function AuthPage({ searchParams }: AuthPageProps) {
  const { mode } = await searchParams;
  const initialMode =
    mode === "signup"
      ? "signup"
      : mode === "resetPassword"
        ? "resetPassword"
        : mode === "verifyOtp"
          ? "verifyOtp"
          : "login";

  return <AuthContent initialMode={initialMode} />;
}
