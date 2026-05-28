# 🔐 SOVEREIGN CODEZERO PORT: SIGNATURE OVERLAY SYSTEM

This confidential document provides the specifications, usage parameters, and full removal instructions for the secure developer console signature lock implemented in your React/Vite codebase.

---

## 1. Operating the Console Signature at Runtime

Because the signature variables are fully encapsulated inside a private IIFE closure, they are completely read-only and write-protected from external scripts, plugins, or third-party interventions. 

The ONLY gateway to modify or update the console signature values dynamically at runtime is your custom-bound immutable function on the global window context: **`window.codezero`**.

### Usage in the Browser Console (F12):
Open the DevTools Console and execute the function with your desired values:

```javascript
// Example: Reset the author and update the environment to PRODUCTION
codezero("CODEZERO", "PRODUCTION");
```

### Options:
*   **Update Author Only**: `codezero("My New Name")`
*   **Update Env Only**: `codezero(null, "STAGING")`
*   **Get Usage Prompt**: `codezero()` (returns the syntax format)

---

## 2. Codebase Implementation Location

The lock is executed inside the main client entry point:
📄 **File Path**: [main.tsx](file:///E:/Nexacore/Nexacore/nexacore-ai-technologies/src/main.tsx#L6-L53)

---

## 3. How to Fully Remove or Reset the Stacking Lock

If you ever wish to completely strip out the locking closure or modify the base default values permanently inside the codebase, follow these direct steps:

### A. To Modify the Default Values permanently:
Open [main.tsx](file:///E:/Nexacore/Nexacore/nexacore-ai-technologies/src/main.tsx) and change the variable assignments at lines 8 and 9:
```typescript
  let author = "CODEZERO";
  let env = "DEVELOPMENT";
```

### B. To Completely Remove the Console Signature and Lock:
1. Open [main.tsx](file:///E:/Nexacore/Nexacore/nexacore-ai-technologies/src/main.tsx).
2. Delete the IIFE block starting from line 6 (`// Encapsulated secure closure...`) down to line 53 (`})();`).
3. Save the file and compile (`npm run build`).

Once deleted, the `window.codezero` object will be completely dereferenced and the console output will be blank.

---

> [!NOTE]
> This guide is saved locally in your active brain directory and is fully untracked in Git, preserving 100% confidentiality of this feature.
