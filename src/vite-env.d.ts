/// <reference types="vite/client" />

type Applications = {
  all: Application[];
};

type Action = {
  type: string;
  payload: any;
};

type Application = {
  path: string;
  name: string;
  valid: boolean;
  artworkPath?: string;
  artwork?: string;
  gradient?: boolean;
};
