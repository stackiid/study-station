import type { Youtuber } from "../../types";
import { Badge } from "../ui/Badge";
import { Tag } from "../ui/Tag";
import { AnchorButton } from "../ui/Button";

export function YoutuberCard({ channel }: { channel: Youtuber }) {
  const hasStats = Boolean(channel.subscribers || channel.videoCount);

  return (
    <article
      id={channel.id}
      data-reveal
      className="group flex h-full flex-col rounded-[var(--radius-card)] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift scroll-mt-24 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <img
          src={channel.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-16 w-16 shrink-0 rounded-full object-cover shadow-soft sm:h-[4.5rem] sm:w-[4.5rem]"
        />
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="font-display text-base font-bold leading-snug text-teal-900 sm:text-lg">
            {channel.channelName}
          </h3>
          <p className="mt-0.5 truncate text-sm font-medium text-ink-500">
            {channel.handle}
          </p>
          {hasStats && (
            <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-ink-500">
              {channel.subscribers && (
                <span className="flex items-center gap-1.5">
                  <i
                    className="fa-solid fa-users text-teal-500"
                    aria-hidden="true"
                  />
                  {channel.subscribers} subscribers
                </span>
              )}
              {channel.videoCount && (
                <span className="flex items-center gap-1.5">
                  <i
                    className="fa-solid fa-clapperboard text-teal-500"
                    aria-hidden="true"
                  />
                  {channel.videoCount} videos
                </span>
              )}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {channel.categories.map((category) => (
          <Badge key={category} tone="teal">
            {category}
          </Badge>
        ))}
      </div>

      <div className="mt-3 flex-1">
        {channel.knownFor && (
          <p className="text-sm font-semibold text-ink-700">
            {channel.knownFor}
          </p>
        )}
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
          {channel.description}
        </p>
      </div>

      {channel.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {channel.tags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

      <div className="mt-5 border-t border-ink-900/6 pt-4">
        <AnchorButton
          href={channel.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="md"
          icon={<i className="fa-brands fa-youtube" aria-hidden="true" />}
          iconPosition="left"
          className="w-full justify-center"
          aria-label={`Visit ${channel.channelName} on YouTube (opens in a new tab)`}
        >
          Visit YouTube channel
        </AnchorButton>
      </div>
    </article>
  );
}
