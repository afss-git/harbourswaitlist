import { Resend } from "resend";

export async function sendWaitlistConfirmation({
  name,
  email,
  role,
}: {
  name: string;
  email: string;
  role: "buyer" | "seller" | "both";
}) {
  const roleLabel =
    role === "buyer" ? "Buyer" : role === "seller" ? "Seller" : "Buyer & Seller";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>You are on the Harbours360 waitlist</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0f2a44 0%,#091b2e 100%);padding:40px 48px;text-align:center;">
            <div style="display:inline-flex;align-items:center;gap:12px;margin-bottom:24px;">
              <span style="font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                Harbours<span style="color:#0ea5e9;">360</span>
              </span>
            </div>
            <p style="margin:0;font-size:13px;color:#94a3b8;letter-spacing:0.08em;text-transform:uppercase;">Maritime and industrial assets, Africa</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:48px;">
            <h1 style="margin:0 0 8px;font-size:26px;font-weight:700;color:#0f172a;line-height:1.25;">
              Thank you for joining the waitlist, ${name}.
            </h1>
            <p style="margin:16px 0 0;font-size:16px;color:#64748b;line-height:1.6;">
              We have registered your interest as a <strong style="color:#0f2a44;">${roleLabel}</strong>.
              Harbours360 is a verified marketplace for buying and selling maritime and
              industrial assets across Africa, with payments protected from offer to delivery.
            </p>

            <!-- Launch date callout -->
            <div style="margin:32px 0;background:linear-gradient(135deg,#0f2a44 0%,#091b2e 100%);border-radius:12px;padding:28px 32px;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;">Launching</p>
              <p style="margin:0;font-size:32px;font-weight:800;color:#ffffff;">1 July 2026</p>
            </div>

            <!-- What to expect -->
            <h2 style="margin:0 0 16px;font-size:18px;font-weight:600;color:#0f172a;">What to expect</h2>
            <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                  <span style="color:#0ea5e9;font-weight:700;margin-right:12px;">01</span>
                  <span style="color:#475569;font-size:15px;">We will email you access details when the platform opens.</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                  <span style="color:#0ea5e9;font-weight:700;margin-right:12px;">02</span>
                  <span style="color:#475569;font-size:15px;">As an early member, your onboarding will be prioritised.</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <span style="color:#0ea5e9;font-weight:700;margin-right:12px;">03</span>
                  <span style="color:#475569;font-size:15px;">Sellers who join early receive featured placement at launch.</span>
                </td>
              </tr>
            </table>

            <div style="margin-top:40px;text-align:center;">
              <a href="https://harbours360.com" style="display:inline-block;background:linear-gradient(135deg,#0ea5e9,#0284c7);color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:50px;">
                Visit Harbours360.com
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:28px 48px;border-top:1px solid #e2e8f0;text-align:center;">
            <p style="margin:0;font-size:13px;color:#94a3b8;">
              &copy; 2026 Harbours360 &bull; Maritime and industrial assets, Africa<br/>
              <a href="mailto:info@harbours360.com" style="color:#0ea5e9;text-decoration:none;">info@harbours360.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();

  const resend = new Resend(process.env.RESEND_API_KEY!);
  return resend.emails.send({
    from: "Harbours360 <noreply@harbours360.com>",
    to: email,
    subject: `You are on the Harbours360 waitlist`,
    html,
  });
}
