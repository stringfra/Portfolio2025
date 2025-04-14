import { Column, Heading, Text } from "@/once-ui/components";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Pagina Non Trovata!
      </Heading>
      <Text onBackground="neutral-weak">La pagina a cui stai provando ad accedere non esiste.</Text>
    </Column>
  );
}
