import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";

export function TournamentButtons() {
  return (
    <Box sx={{ width: 554 }}>
      <Stack spacing={1}>
        {/* Winners Round Text */}
        <Divider>
          <Box
            sx={{
              color: "text.secondary",
              textAlign: "center",
              fontWeight: "medium",
              fontFamily: "Noto Sans JP",
            }}
          >
            Winners Side
          </Box>
        </Divider>
        {/* Winners Side */}
        <Stack spacing={3} direction="row">
          {/* WQF */}

          <Stack spacing={0.5}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>

          {/* WSF */}
          <Stack spacing={4} sx={{ pt: 3 }}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>

          {/* WF */}
          <Stack sx={{ pt: 5 }}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>

          {/* GF */}
          <Stack sx={{ pt: 5 }}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>

          {/* GF2 */}
          <Stack sx={{ pt: 5 }}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>
        </Stack>

        {/* Losers Round Text */}
        <Divider>
          <Box
            sx={{
              color: "text.secondary",
              textAlign: "center",
              fontWeight: "medium",
              fontFamily: "Noto Sans JP",
            }}
          >
            Losers Side
          </Box>
        </Divider>

        {/* Losers Side */}
        <Stack spacing={3} direction="row">
          {/* LTOP16 */}
          <Stack spacing={0.5}>
            <Button color="secondary" variant="outlined">
              LTOP16
            </Button>
            <Button color="secondary" variant="outlined">
              WQF1
            </Button>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>

          {/* LTOP12 */}
          <Stack spacing={4} sx={{ pt: 2 }}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>

          {/* LQF */}
          <Stack spacing={4} sx={{ pt: 2 }}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>

          {/* LSF */}
          <Stack sx={{ pt: 3 }}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>

          {/* LF */}
          <Stack sx={{ pt: 3 }}>
            <Button color="secondary" variant="outlined">
              WQFa
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
