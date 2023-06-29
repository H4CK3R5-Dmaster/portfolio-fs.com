import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PublicLayout from "../../layout/layoutheader";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../utils/chakra-ui-theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PublicLayout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PublicLayout>
  );
}
