namespace website_isa_com.Utils
{
    public class Constants
    {
        public static readonly string API_ID = "aky4tww1bmia";
        public static readonly string API_KEY = "SOu648HPJuVav-xo6dCPSi1zDPYSgZXo2IH1iR6_AXk";

#if DEBUG 
        public const bool IS_DEV = true;
        public const bool IS_PROD = false;
#else
        public const bool IS_DEV = false;
        public const bool IS_PROD = true;
#endif

        public class ConfigItem<T>
        {
            public T Dev { get; set; }
            public T Prod { get; set; }

            public ConfigItem(T dev, T prod)
            {
                this.Dev = dev;
                this.Prod = prod;
            }

            public T GetCurrentItem()
            {
                if (IS_DEV)
                {
                    return Dev;
                }
                else if (IS_PROD)
                {
                    return Prod;
                }
            }
        }
    }
}
