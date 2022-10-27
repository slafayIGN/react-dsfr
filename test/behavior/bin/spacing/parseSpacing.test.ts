import { it, expect } from "vitest";
import { parseSpacing } from "../../../../src/bin/css_to_ts/spacing";
import type { SpacingTokenAndValue } from "../../../../src/bin/css_to_ts/spacing";

export default () =>
    it("Parse spacing successfully", () => {
        const input = `
.fr-m-7v {
  margin: 1.75rem !important;
}

.fr-m-12v,
.fr-m-6w {
  margin: 3rem !important;
}

@media (min-width: 36em) { }

@media (min-width: 48em) { }

@media (min-width: 62em) { }

@media (min-width: 78em) { }
`;

        const expected: SpacingTokenAndValue[] = [
            {
                "token": "7v",
                "value": "1.75rem"
            },
            {
                "token": "7v",
                "value": "1.75rem"
            }
        ];

        const got = parseSpacing(input);

        expect(got).toStrictEqual(expected);
    });
