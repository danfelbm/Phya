// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sSZkEHHhFFf6b7q7psrYCu
// Component: xDSZyt3H0cH
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: vFmzxsL15MZ/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: vGQatPzkQFb5/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: sSZkEHHhFFf6b7q7psrYCu/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: xDSZyt3H0cH/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: bj7Bi34zkycq/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: -NvOtxZE6caz/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: tZMcE3pbO9mF/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: pKa1rpd5Evox/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: i0ATEn92Ih9D/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  dataFetches?: PlasmicFooter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__ojUxd)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__yiCfz)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__n1Uod)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__jv5Gb)}
            icon={
              <LogoIcon
                className={classNames(defaultcss.all, sty.svg__nAofl)}
                role={"img"}
              />
            }
          />

          <div className={classNames(defaultcss.all, sty.freeBox__iQkI)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__kNc4D
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Terms"}
            </p.PlasmicLink>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__ee0Ak
              )}
            >
              {" ?? "}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__bHeXl
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__trre4)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__sraEb)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__rm2T1
              )}
            >
              {"Products"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__mySd4
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Web Studio"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__cYg7W
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"DynamicBox Flex"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__pnZpk
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Programming Forms"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__a0Kip
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Integrations"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__dl76Z
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Command-line"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__jHdfw)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__kfHZm
              )}
            >
              {"Resources"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__zs6D
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Documentation"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__v8SB9
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Tutorials & Guides"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__zy1Gq
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Blog"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__bsApP
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Support Center"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___3Jt4W
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Partners"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__cXsbg)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__gobKh
              )}
            >
              {"Company"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__gCmmy
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Home"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__tt6Dm
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"About us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__s47Vt
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Company values"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___8Gro1
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Pricing"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___1EO3
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy policy"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__eiTbK)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__rtGQc
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox___9TsHu
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__ew6X4)}>
              <input
                data-plasmic-name={"textbox"}
                data-plasmic-override={overrides.textbox}
                className={classNames(defaultcss.input, sty.textbox)}
                placeholder={"Your email" as const}
                size={1 as const}
                type={"text" as const}
                value={"" as const}
              />

              <div className={classNames(defaultcss.all, sty.freeBox__bpXg1)} />

              <button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames(defaultcss.button, sty.button)}
              >
                <IconIcon
                  className={classNames(defaultcss.all, sty.svg__txKcb)}
                  role={"img"}
                />
              </button>
            </div>
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.freeBox__rPbAm)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___6Osfu)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__dSx8H)}>
          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__hl2D0
            )}
            component={Link}
            href={"https://cruip.com/" as const}
            platform={"nextjs"}
          >
            {"Designed by Cruip. "}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__e5ZCg
            )}
            component={Link}
            href={"https://www.plasmic.app/" as const}
            platform={"nextjs"}
          >
            {"Built in Plasmic. "}
          </p.PlasmicLink>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__lfUHa
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__ym6Wa)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__dl88A)}
            icon={
              <TwitterIconIcon
                className={classNames(defaultcss.all, sty.svg__qwHsv)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__maJnW)}
            icon={
              <GithubIconIcon
                className={classNames(defaultcss.all, sty.svg__qdwg7)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink___73Rxz)}
            icon={
              <FacebookIconIcon
                className={classNames(defaultcss.all, sty.svg__neX8Y)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFooter__Fetches;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
