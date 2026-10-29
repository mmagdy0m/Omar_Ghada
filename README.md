# Omar & Ghada Wedding Website – Opening Flicker Fix

This update fixes the opening-envelope animation so the invitation card no longer briefly hides and then pops into view.

## What changed
- The top flap opens first.
- The card starts rising only after the flap has moved out of the way.
- The letter keeps a stable layer order behind the pocket front.
- The opening text and button fade during the animation to avoid overlap.
- Music still starts on the same click that opens the invitation.

## GitHub update
Replace these files in your repository root:
- index.html
- styles.css
- script.js

Keep the existing assets folder.
