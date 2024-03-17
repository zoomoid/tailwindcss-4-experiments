export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-4">
      <div className="border-l border-solid border-black">
        <p className="transform translate-x-8 text-xl border-red-500 border">
          This should be translated to the right by 2rem from the black line.<br/>
          In Chrome and Safari this works fine, because <code>--tw-translate-y</code> defaults to 0 as per <code>@property --tw-translate-y</code>.<br/>
          Firefox only supports <code>@property</code> in nightly builds and not at all on Firefox for Android.
        </p>
      </div>
    </main>
  );
}
