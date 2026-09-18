# Gender-aware character assets

## Goal

Make the character shown throughout EVOLUA follow the gender chosen during onboarding.

## Changes

- Save the onboarding gender choice locally so it survives navigation and page refreshes.
- Add a shared character-asset selector for Masculino, Feminino, Outro, and Prefiro não informar.
- Keep the current masculine character set for Masculino.
- Create cohesive feminine and gender-neutral 3D character imagery that matches the existing dark EVOLUA visual style.
- Replace direct character-image references across onboarding, mapping, home, measurements, comparison, and profile screens with the shared selection.
- Use a neutral character for both Outro and Prefiro não informar, avoiding gender assumptions.

## Technical details

- Store only the selected presentation preference in browser storage; no account or database work is needed.
- Read browser storage after hydration to avoid server-rendering mismatches.
- Preserve all current screen layouts and flows.
- Verify selection changes, refresh persistence, and representative screens at the current mobile size.
