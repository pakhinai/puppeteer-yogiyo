const puppeteer = require("puppeteer");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  const context = browser.defaultBrowserContext();
  await context.overridePermissions("https://www.yogiyo.co.kr", [
    "geolocation",
  ]);

  await page.goto("https://www.yogiyo.co.kr/mobile/#/");

  await sleep(2000);

  await page.type(
    "*[name='address_input']",
    "충청북도 청주시 사직동 554-6 청주의료원영안실식당영안실,1층",
    { delay: 100 }
  );

  await page.click("button.btn.btn-default.ico-pick[type='button']");

  await sleep(1000);

  await page.waitForSelector(".dropdown-menu.ng-scope.am-flip-x.bottom-left", {
    visible: true,
  });

  const lastOptionSelector = `.dropdown-menu.ng-scope.am-flip-x.bottom-left li:last-of-type a`;

  await page.waitForSelector(`${lastOptionSelector}`, { visible: true });

  await page.click(lastOptionSelector);

  // await sleep(3000);
  await sleep(2000);

  await page.evaluate(() => {
    sessionStorage.setItem(
      "ngStorage-cart",
      JSON.stringify({
        restaurant_id: 1335144,
        restaurant: {
          id: 1335144,
          begin: "11:00:00",
          end: "02:00:00",
          serving_type: "vd",
          available_order_serving_types: {
            delivery: [
              {
                payment_methods: ["creditcard", "online", "cash"],
                serving_type: "vd",
                floating_message: "",
                open_time_description: "11:00 - 02:00",
                min_order_amount: 5000,
                is_open: true,
                estimated_delivery_time: "35~50분",
                free_delivery_threshold: 5000,
                undeliverable_reason: null,
                is_deliverable: true,
                delivery_fee_notice: {
                  by_time: null,
                  by_price: [
                    {
                      from: "5000",
                      to: "",
                      amount: 0,
                      display: {
                        basic: "무료",
                        discounted: null,
                        description: null,
                      },
                    },
                  ],
                  surcharge_description: null,
                },
                delivery_fee_to_display: {
                  basic: "무료",
                  discounted: null,
                  description: null,
                },
                delivery_fee_by_order_amounts: {
                  basic: [{ order_amount: 5000, delivery_fee: 0 }],
                },
                discounted_delivery_fee: 0,
                adjusted_delivery_fee: 0,
                minimum_delivery_fee: 0,
                extra_delivery_fee: null,
                is_ypx: false,
                can_order_liquor: true,
              },
            ],
            pickup: [
              {
                payment_methods: ["online"],
                serving_type: "pickup",
                floating_message: "",
                open_time_description: "11:00 - 02:00",
                min_order_amount: 0,
                is_open: true,
              },
            ],
            pre_order_pickup: [],
          },
          name: "포크파스타-청주점",
          phone: "050720900751",
          service_center_number: "",
          is_new: true,
          is_oe: false,
          promotion_text: "",
          minimum_delivery_minutes: 35,
          maximum_delivery_minutes: 50,
          minimum_pickup_minutes: 20,
          address:
            "충청북도 청주시 서원구 사창동 171-5 고용지원센타 지하1층 106호",
          open_all_day_until: null,
          stock_management: false,
          hygiene_grade: null,
          tags: [],
          categories: [
            "야식",
            "테이크아웃",
            "한식",
            "분식",
            "피자양식",
            "1인분주문",
          ],
          logo_url: "",
          new_logo_url:
            "https://rev-static.yogiyo.co.kr/public/vendor/new_logo/20240412175335_업체자체_20240412_1335144_포크파스타-청주점_가게로고_300x300.jpg",
          lat: 36.6362396,
          lng: 127.45941225,
          franchise_id: null,
          franchise_name: "",
          restaurant_type: "food",
          use_reusable_packaging: false,
          has_shop_coupons: true,
          has_disposable_menu: false,
          unorderable_under_min_order_value: false,
          background_url:
            "https://rev-static.yogiyo.co.kr/public/vendor/background/20240409202409_3055b1ad7a1366379497ba5d1daab9b2_tn.jpg",
          detail_image_urls: [],
          review_avg: 5,
          review_count: 5,
          review_image_count: 5,
          owner_reply_count: 4,
          discount_percent: 0,
          discount_until: null,
          discount_from: null,
          distance: 1.28259,
          reachable: true,
          opening_times: [
            { day: "월", open_time: ["휴무"] },
            { day: "화", open_time: ["오전 11시 ~ 다음날 오전 2시"] },
            { day: "수", open_time: ["오전 11시 ~ 다음날 오전 2시"] },
            { day: "목", open_time: ["오전 11시 ~ 다음날 오전 2시"] },
            { day: "금", open_time: ["오전 11시 ~ 다음날 오전 2시"] },
            { day: "토", open_time: ["오전 11시 ~ 다음날 오전 2시"] },
            { day: "일", open_time: ["오전 11시 ~ 밤 12시"] },
          ],
          is_open_all_day: false,
          discounts: {
            additional: null,
            delivery_fee: null,
            bargain_promotion: {
              delivery: { fixed_percentage_discount: 0, has_rank_menu: false },
              pickup: { fixed_percentage_discount: 0, has_rank_menu: false },
            },
            final_discount_percent: { delivery: 0, pickup: 0 },
          },
          ypx_join_page: null,
          introduction_title: "포크파스타 리뷰이벤트",
          pre_order_pickup_message: null,
          payment_methods: ["creditcard", "online", "cash"],
          except_cash: false,
          delivery_fee: 0,
          free_delivery_threshold: 5000,
          min_order_amount: 5000,
          open: true,
          delivery_fee_by_order_amounts: {
            basic: [{ order_amount: 5000, delivery_fee: 0 }],
          },
          open_time_description: "11:00 - 02:00",
        },
        restaurant_name: "포크파스타-청주점",
        default_price: 0,
        checkout_address: {
          address:
            "충청북도 청주시 사직동 554-6 청주의료원영안실식당영안실,1층",
          zipcode: "000000",
        },
        stock_amount_dictionary: {},
        items: [
          {
            price: 26500,
            base_price: 26500,
            default_price: 0,
            name: "[NEW]감바스 알 아히요+메인1+음료1",
            slug: "catalogyo_menu_item-9980620-991094363",
            id: 991094363,
            amount: 1,
            subchoices: {
              "catalogyo_option_section-1621023641": {
                slug: "catalogyo_option_section-1621023641",
                name: "[[피클]] 선택",
                multiple: false,
                items: [
                  {
                    price: 0,
                    is_deposit: false,
                    soldout: false,
                    name: "피클(O)",
                    deposit_description: "",
                    deposit_price: 0,
                    description: "",
                    id: 1652610849,
                    slug: "catalogyo_option-1652610849",
                  },
                ],
              },
              "catalogyo_option_section-1621023642": {
                slug: "catalogyo_option_section-1621023642",
                name: "[필수 메인] 선택",
                multiple: false,
                items: [
                  {
                    price: 0,
                    is_deposit: false,
                    soldout: false,
                    name: "쉬림프 알리오 올리오",
                    deposit_description: "",
                    deposit_price: 0,
                    description: "",
                    id: 1652610851,
                    slug: "catalogyo_option-1652610851",
                  },
                ],
              },
              "catalogyo_option_section-1621023647": {
                slug: "catalogyo_option_section-1621023647",
                name: "[메인 맵기] 선택",
                multiple: false,
                items: [
                  {
                    price: 0,
                    is_deposit: false,
                    soldout: false,
                    name: "0단계(안 매워요)",
                    deposit_description: "",
                    deposit_price: 0,
                    description: "",
                    id: 1652610885,
                    slug: "catalogyo_option-1652610885",
                  },
                ],
              },
              "catalogyo_option_section-1621023649": {
                slug: "catalogyo_option_section-1621023649",
                name: "[필수 음료] 선택",
                multiple: false,
                items: [
                  {
                    price: 0,
                    is_deposit: false,
                    soldout: false,
                    name: "코카콜라 355mL",
                    deposit_description: "",
                    deposit_price: 0,
                    description: "",
                    id: 1652610894,
                    slug: "catalogyo_option-1652610894",
                  },
                ],
              },
            },
            id_for_stock: 1714060446171,
          },
        ],
      })
    );
  });

  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  await page.waitForSelector(".btn.btn-warning.hidden-xs.ng-binding", {
    visible: true,
  });

  await page.evaluate(() => {
    const button = document.querySelector(
      ".btn.btn-warning.hidden-xs.ng-binding"
    );
    if (button && button.textContent.includes("주문표")) {
      button.click();
    }
  });

  await sleep(1000);

  await page.waitForSelector("a.btn.btn-lg.btn-ygy1.btn-block", {
    visible: true,
  });

  await page.evaluate(() => {
    const button = document.querySelector("a.btn.btn-lg.btn-ygy1.btn-block");
    if (button && !button.disabled && button.textContent.includes("주문하기")) {
      button.click();
    }
  });
})();
