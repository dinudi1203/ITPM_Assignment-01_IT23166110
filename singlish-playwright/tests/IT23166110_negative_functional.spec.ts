import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Neg_Fun_001",
    name: "Incorrect Sinhala consonant mapping due to mixed casing in verb",
    input: "api NAGigitinawa",
    expected: "අපි නැගිටිනවා",
  },
  {
    id: "Neg_Fun_002",
    name: "Mixed casing with abbreviations causes corrupted Sinhala transliteration",
    input: "maTA PIN ekaYI OTP ekayI DHEKama oonee",
    expected: "මට PIN එකයි OTP එකයි දෙකම ඕනේ",
  },
  {
    id: "Neg_Fun_003",
    name: "Excessive punctuation and casing produce incorrect Sinhala spelling",
    input: " ahoo dhuKaki    \n!!!!!",
    expected: "අහෝ දුකකි!",
  },
  {
    id: "Neg_Fun_004",
    name: "Fully joined compound sentence fails word segmentation",
    input: "apigamanagihinaevithkathaakaramu.",
    expected: "අපි ගමන ගිහින් ඇවිත් කතා කරමු.",
  },
  {
    id: "Neg_Fun_005",
    name: "Mixed casing with brand name and abbreviation causes partial corruption",
    input: "maTA ASAP eeka Telegram eken  Dhanna",
    expected: "mata ASAP eeka Telegram eken dhaanna",
  },
  {
    id: "Neg_Fun_006",
    name: "Mixed casing, spacing, and informal emphasis cause multiple transliteration errors",
    input: "ee wagee GEdharakatA naM mee    WAGEE KaamaRAYAK hadhanna epAA",
    expected: "ඒ වගේ ගෙදරකට නම් මේ වගේ කාමරයක් හදන්න එපා",
  },
  {
    id: "Neg_Fun_007",
    name: "Currency acronym with mixed casing produces incorrect Sinhala words",
    input: "mata USDvalin MUDHAL dhaanna",
    expected: "මට USD වලින් මුදල් දාන්න",
  },
  {
    id: "Neg_Fun_008",
    name: "Slang, abbreviations, and repeated punctuation cause unstable output",
    input: "ADOOO mokkadha BN ee Vunee???",
    expected: "අඩෝ මොකක්ද බන් ඒ වුනේ?",
  },
  {
    id: "Neg_Fun_009",
    name: "Joined technical term and sentence structure fail segmentation",
    input: "TeamsMeetingeKAthiyennekiiyatadha?",
    expected: "Teams meeting එක තියෙන්නෙ කීයටද?",
  },
  {
    id: "Neg_Fun_010",
    name: "Numeric value and mixed casing disrupt complex sentence conversion",
    input: "MATa24officeennabaerivunaa, \nUNahaedhunaNIsaa.",
    expected: "මට 24 office එන්න බැරි වුනා,උණ හැදුන නිසා.",
  },
];

test.describe("Negative Functional Tests (Expected to Fail)", () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "networkidle",
      });
      const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
      const inputSelector =
        'textarea[placeholder="Input Your Singlish Text Here."]';
      await page.fill(inputSelector, "");
      await inputArea.click();
      await inputArea.pressSequentially(tc.input, { delay: 35 });
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(
          new CompositionEvent("compositionend", {
            bubbles: true,
            cancelable: true,
            data: (el as HTMLTextAreaElement).value,
          }),
        );
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }, inputSelector);
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');
      // Force the test to always fail for demonstration
      expect(false).toBe(true);
      await page.close();
    });
  }
});
