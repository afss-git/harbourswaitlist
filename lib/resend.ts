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

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>You are on the Harbours360 waitlist</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f5f9;padding:40px 16px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;width:100%;">

  <!-- Logo bar -->
  <tr>
    <td style="padding-bottom:24px;text-align:center;">
      <span style="font-size:22px;font-weight:800;color:#0f2a44;letter-spacing:-0.5px;">
        Harbours<span style="color:#0ea5e9;">360</span>
      </span>
    </td>
  </tr>

  <!-- Card -->
  <tr>
    <td style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">

      <!-- Navy top accent -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="background:#0f2a44;height:4px;font-size:0;line-height:0;">&nbsp;</td>
        </tr>
      </table>

      <!-- Body -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:40px 40px 32px;">
        <tr>
          <td>
            <!-- Headline -->
            <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0f172a;line-height:1.3;">
              You are on the list, ${name}.
            </p>
            <p style="margin:0 0 28px;font-size:15px;color:#64748b;line-height:1.6;">
              We have registered your interest as a <strong style="color:#0f2a44;">${roleLabel}</strong>.
              We will email you directly when Harbours360 opens.
            </p>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr><td style="border-top:1px solid #e2e8f0;padding-bottom:24px;font-size:0;">&nbsp;</td></tr>
            </table>

            <!-- Launch date -->
            <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.1em;">
              Launch date
            </p>
            <p style="margin:0 0 28px;font-size:28px;font-weight:800;color:#0f2a44;letter-spacing:-0.5px;">
              1 July 2026
            </p>

            <!-- What happens next -->
            <p style="margin:0 0 14px;font-size:13px;font-weight:600;color:#0f172a;text-transform:uppercase;letter-spacing:0.06em;">
              What happens next
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="width:28px;vertical-align:top;padding-top:1px;">
                        <span style="display:inline-block;width:20px;height:20px;background:#0ea5e9;border-radius:50%;text-align:center;font-size:11px;font-weight:700;color:#fff;line-height:20px;">1</span>
                      </td>
                      <td style="font-size:14px;color:#475569;line-height:1.55;padding-left:10px;">
                        You will receive early access before the platform opens to the public.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="width:28px;vertical-align:top;padding-top:1px;">
                        <span style="display:inline-block;width:20px;height:20px;background:#0ea5e9;border-radius:50%;text-align:center;font-size:11px;font-weight:700;color:#fff;line-height:20px;">2</span>
                      </td>
                      <td style="font-size:14px;color:#475569;line-height:1.55;padding-left:10px;">
                        Sellers who joined early will receive featured placement for their first listing.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="width:28px;vertical-align:top;padding-top:1px;">
                        <span style="display:inline-block;width:20px;height:20px;background:#0ea5e9;border-radius:50%;text-align:center;font-size:11px;font-weight:700;color:#fff;line-height:20px;">3</span>
                      </td>
                      <td style="font-size:14px;color:#475569;line-height:1.55;padding-left:10px;">
                        We will only contact you about Harbours360. No spam, unsubscribe any time.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:32px;">
              <tr>
                <td>
                  <a href="https://harbours360.com"
                     style="display:inline-block;background:#0ea5e9;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:13px 32px;border-radius:50px;letter-spacing:0.01em;">
                    Visit Harbours360.com
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="padding:24px 0 8px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6;">
        &copy; 2026 Harbours360 &bull; Maritime and industrial assets, Africa<br/>
        <a href="mailto:info@harbours360.com" style="color:#0ea5e9;text-decoration:none;">info@harbours360.com</a>
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>

</body>
</html>`;

  const resend = new Resend(process.env.RESEND_API_KEY!);
  return resend.emails.send({
    from: "Harbours360 <noreply@harbours360.com>",
    to: email,
    subject: `You are on the Harbours360 waitlist`,
    html,
  });
}
