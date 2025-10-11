import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";


function RouteGuard({ children }: { children: React.ReactNode }) {

  const isAuth = false;
  const router = useRouter();

  useEffect(() => {
    // if not authenticated, redirect to login
    if (!isAuth) {
      // redirect to login
      router.replace("/auth")
    }
  });
  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </RouteGuard>
  );
}
