import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const topPosition = useBreakpointValue({ base: "5%", md: "20%" });
  const bottomPosition = useBreakpointValue({ base: "5%", md: "20%" });

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box flexGrow={1} position="relative">
        <Image
          src="/montessori-toys.jpeg"
          alt="Montessori Wooden Toys"
          width="100%"
          height="100%"
          objectFit="cover"
          position="absolute"
          top="0"
          left="0"
          zIndex="-1"
        />
        <Center
          bg="rgba(255, 255, 255, 0.7)"
          p={6}
          position="absolute"
          top={topPosition}
          left="50%"
          transform="translateX(-50%)"
          borderRadius="md"
        >
          <Box>
            <Text fontSize="6xl" fontWeight="bold" fontFamily="Poppins" textAlign="center">
              Tienda Juegos
            </Text>
            <Text fontSize="5xl" fontWeight="bold" fontFamily="Poppins" textAlign="center">
              Próximamente
            </Text>
          </Box>
        </Center>
        <Center
          bg="rgba(255, 255, 255, 0.7)"
          p={4}
          position="absolute"
          bottom={bottomPosition}
          left="50%"
          transform="translateX(-50%)"
          borderRadius="md"
        >
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" fontFamily="Poppins" mb={4}>
              Seguinos en nuestras Redes Sociales
            </Text>
            <Flex justifyContent="center" spacing={8}>
              <Link href="https://www.instagram.com/somostiendajuegos" isExternal>
                <IconButton
                  aria-label="Instagram"
                  icon={<FontAwesomeIcon icon={faInstagram} />}
                  colorScheme="gray"
                  variant="outline"
                  fontSize="5xl"
                />
              </Link>
              <Link href="https://wa.me/+5491123552064" isExternal>
                <IconButton
                  aria-label="WhatsApp"
                  icon={<FontAwesomeIcon icon={faWhatsapp} />}
                  colorScheme="gray"
                  variant="outline"
                  fontSize="5xl"
                />
              </Link>
            </Flex>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
