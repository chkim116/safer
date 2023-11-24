import path from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { defineConfig } from "vitest/config";
import { LibraryFormats } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

const EXCLUDE_PATH_LIST = ["src/**/*.test.*", "src/_common/**"];

const entry = Object.fromEntries(
  glob
    .sync("src/**/*.ts", {
      ignore: EXCLUDE_PATH_LIST,
    })
    .map((file) => [
      path.relative(
        "src",
        file.slice(0, file.length - path.extname(file).length)
      ),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
);

export default defineConfig({
  plugins: [dts({ outDir: "dist/types", exclude: EXCLUDE_PATH_LIST })],
  build: {
    outDir: "dist",
    lib: {
      entry,
      formats: ["es", "cjs"] as LibraryFormats[],
      fileName(format, entryName) {
        return `${format}/${entryName}.js`;
      },
      name: pkg.name,
    },
    rollupOptions: {
      output: {
        chunkFileNames(chunkInfo) {
          return `lib/${chunkInfo.name}-[hash].js`;
        },
      },
    },
  },
  test: {
    globals: true,
  },
});
